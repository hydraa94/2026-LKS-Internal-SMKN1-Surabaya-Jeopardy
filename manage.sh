#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

# ============================================================
# Colors
# ============================================================

RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
RESET="\033[0m"

info()  { echo -e "${BLUE}[INFO]${RESET} $*"; }
ok()    { echo -e "${GREEN}[ OK ]${RESET} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${RESET} $*"; }
error() { echo -e "${RED}[FAIL]${RESET} $*"; }

# ============================================================
# Helpers
# ============================================================

usage() {
cat <<EOF
Challenge Manager

Usage:
  $0 up             Deploy all challenges
  $0 down           Stop all challenges
  $0 restart        Restart all challenges
  $0 status         Show challenge status
  $0 endpoints      Show challenge endpoints
  $0 help

Aliases:
  endpoint, ports
  ps, st
  -h, --help
EOF
}

require_cmd() {
    command -v "$1" >/dev/null 2>&1 || {
        error "'$1' is not installed."

        if [[ "$1" == "docker" ]]; then
            echo
            echo "If you're using:"
            echo "  Ubuntu VPS : Install Docker Engine"
            echo "  WSL        : Enable Docker Desktop WSL Integration"
            echo "  Git Bash   : Install Docker Desktop"
        fi

        exit 2
    }
}

check_docker() {
    docker info >/dev/null 2>&1 || {
        error "Docker daemon is not running or not reachable."
        exit 3
    }
}

find_compose() {
    find "$ROOT" -type f -name docker-compose.yml | sort
}

load_compose_files() {
    mapfile -t COMPOSES < <(find_compose)

    if [ ${#COMPOSES[@]} -eq 0 ]; then
        error "No docker-compose.yml files found."
        exit 4
    fi
}

host_ip() {
    hostname -I 2>/dev/null | awk '{print $1}'
}

# ============================================================
# Commands
# ============================================================

deploy() {

    info "Deploying all challenges..."
    echo

    for compose in "${COMPOSES[@]}"; do

        dir="$(dirname "$compose")"
        rel="${dir#$ROOT/}"

        if docker compose -f "$compose" ps --status running | grep -q .; then
            warn "$rel (already running)"
            continue
        fi

        info "$rel"

        if docker compose -f "$compose" config -q; then
            docker compose -f "$compose" up -d >/dev/null
            ok "$rel"
        else
            error "$rel (invalid compose file)"
        fi

        echo
    done

    show_endpoints
}

stop_all() {

    info "Stopping all challenges..."
    echo

    for compose in "${COMPOSES[@]}"; do

        dir="$(dirname "$compose")"
        rel="${dir#$ROOT/}"

        if ! docker compose -f "$compose" ps -q | grep -q .; then
            warn "$rel (already stopped)"
            continue
        fi

        info "$rel"
        docker compose -f "$compose" down >/dev/null
        ok "$rel"

        echo
    done
}

show_status() {

    for compose in "${COMPOSES[@]}"; do

        dir="$(dirname "$compose")"
        rel="${dir#$ROOT/}"

        echo "========================================"
        echo "$rel"
        echo "========================================"

        docker compose -f "$compose" ps

        echo
    done
}

show_endpoints() {

    HOST_IP=$(host_ip)

    echo
    echo "========================================"
    echo " Challenge Endpoints"
    echo "========================================"

    printf "%-35s %-12s %-20s\n" "Challenge" "Status" "Endpoint"
    printf "%-35s %-12s %-20s\n" "-----------------------------------" "----------" "--------------------"

    found=0

    for compose in "${COMPOSES[@]}"; do

        dir="$(dirname "$compose")"
        rel="${dir#$ROOT/}"

        cid=$(docker compose -f "$compose" ps -q | head -n1)

        if [ -z "$cid" ]; then
            printf "%-35s %-12s %s\n" "$rel" "Stopped" "-"
            continue
        fi

        ports=$(docker port "$cid" 2>/dev/null || true)

        if [ -z "$ports" ]; then
            printf "%-35s %-12s %s\n" "$rel" "Running" "-"
            continue
        fi

        while read -r line; do
            host_port=$(echo "$line" | sed -E 's/.*:([0-9]+)$/\1/')
            printf "%-35s %-12s %s:%s\n" "$rel" "Running" "$HOST_IP" "$host_port"
            found=1
        done <<< "$ports"

    done

    if [ "$found" -eq 0 ]; then
        echo
        warn "No running challenges."
    fi

    echo
}

# ============================================================
# Main
# ============================================================

case "${1:-help}" in
    up)
        require_cmd docker
        check_docker
        load_compose_files
        deploy
        ;;

    down)
        require_cmd docker
        check_docker
        load_compose_files
        stop_all
        ;;

    restart)
        require_cmd docker
        check_docker
        load_compose_files
        stop_all
        deploy
        ;;

    status|ps|st)
        require_cmd docker
        check_docker
        load_compose_files
        show_status
        ;;

    endpoints|endpoint|ports)
        require_cmd docker
        check_docker
        load_compose_files
        show_endpoints
        ;;

    help|-h|--help|"")
        usage
        ;;

    *)
        error "Unknown command: $1"
        echo
        usage
        exit 1
        ;;
esac
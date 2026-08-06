## Solution

After connecting to the challenge, list the available files:

```bash
ls
```

Output:

```text
nothin.txt
secret.txt
```

Trying to use `cat` fails because it has been removed:

```bash
cat nothin.txt
```

```text
bash: cat: command not found
```

Instead, use another command capable of displaying a file, for example:

```bash
more nothin.txt
```

or

```bash
less nothin.txt
```

or

```bash
base64 nothin.txt
```

Any command that can read the file contents is a valid solution.

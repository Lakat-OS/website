#!/bin/bash

# Define the paths
REPO_ROOT="$(pwd)"
SOURCE_HOOKS_DIR="$REPO_ROOT/git-hooks"
TARGET_HOOKS_DIR="$REPO_ROOT/.git/hooks"

# Check if the git-hooks directory exists
if [ ! -d "$SOURCE_HOOKS_DIR" ]; then
    echo "Error: Directory $SOURCE_HOOKS_DIR does not exist."
    exit 1
fi

# Create symlinks for each hook in the git-hooks directory
for hook in $(ls "$SOURCE_HOOKS_DIR"); do
    ln -s "$SOURCE_HOOKS_DIR/$hook" "$TARGET_HOOKS_DIR/$hook"
    echo "Created symlink for $hook"
done

echo "Setup complete!"

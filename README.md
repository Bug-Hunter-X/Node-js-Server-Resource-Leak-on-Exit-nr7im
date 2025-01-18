# Node.js Server Resource Leak

This repository demonstrates a common issue in Node.js applications: improper handling of server shutdown.  The `server.js` file contains a server that doesn't gracefully close when the process ends, leading to potential resource leaks.  `serverSolution.js` provides a corrected version.

## Problem

The original server lacks a mechanism to handle the `SIGTERM` or `SIGINT` signals, which are typically sent when a process is terminated.  Without proper handling, the server might not close its resources (sockets, etc.) before exiting, leading to resource leaks and potential instability.

## Solution

The solution implements event listeners for `SIGTERM` and `SIGINT` signals.  These listeners trigger a graceful shutdown of the server, allowing it to close existing connections before exiting cleanly.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js` to run the original (buggy) code.
4. Run `node serverSolution.js` to see the fix in action.  Then try to kill the process (Ctrl+C) to observe the difference.

## Note
This example highlights a common issue in long-running Node.js applications.  Always ensure your servers gracefully handle termination signals to prevent resource leaks and maintain system stability.
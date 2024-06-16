#!/bin/sh
gcc -v 
if [ $? != 0 ]; then
        echo "GCC not installed"
fi 
ld -v
if [ $? != 0 ]; then
        echo "Please install binutils"
fi


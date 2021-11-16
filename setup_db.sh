#!/bin/bash
echo Wait for servers to be up
sleep 10

echo "CREATE DATABASE emma_backend;" | sqlplus -s postgres/my_postgres@localhost/emma_backend
#!/bin/bash

NODE_HOME="/opt/node"
PATH="./node_modules/.bin:${NODE_HOME}/bin:${PATH}"

export PATH

PS1="[LanParty Frontend] ${PS1}"
export PS1

export REACT_DEBUGGER="unset ELECTRON_RUN_AS_NODE && open -g 'rndebugger://set-debugger-loc?port=19001'" &&
watchman watch-del-all &&
yarn start --reset-cache
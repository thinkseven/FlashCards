export REACT_DEBUGGER="rndebugger-open --open --port 19001" &&
# enable below command
# ====================
# for Mac only and without react-native-debugger-open package
#export REACT_DEBUGGER="unset ELECTRON_RUN_AS_NODE && open -g 'rndebugger://set-debugger-loc?port=19001'" &&
watchman watch-del-all &&
yarn start --reset-cache
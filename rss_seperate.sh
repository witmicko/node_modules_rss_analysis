#!/usr/bin/env bash

node --expose-gc memusage_rss.js baseline;
baseline=`cat baselinemem` &&
node --expose-gc memusage_rss.js hello_app $baseline;
node --expose-gc memusage_rss.js mbaas $baseline;
node --expose-gc memusage_rss.js fhdb $baseline;
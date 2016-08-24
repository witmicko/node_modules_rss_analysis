#!/usr/bin/env bash

node memusage_rss.js baseline;
baseline=`cat baselinemem` &&
node memusage_rss.js hello_app $baseline;
node memusage_rss.js mbaas $baseline;
node memusage_rss.js fhdb $baseline;
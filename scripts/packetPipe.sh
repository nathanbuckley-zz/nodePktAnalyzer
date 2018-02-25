#!/usr/bin/env bash

# A bash script for Piping airodump-ng(wifi only) / tcpdump(tcp only but multi interface) pcap files to the nodePktAnalyzer.
# Use for remote or local wifi Pineapples and wifi dongals that support 
# monitor and promiscuous mode (Ralink RT5370 chipset... etc).

cat << EOF

    ____  __   __  _____           _       __ 
   / __ \/ /__/ /_/ ___/__________(_)___  / /_
  / /_/ / //_/ __/\__ \/ ___/ ___/ / __ \/ __/
 / ____/ ,< / /_ ___/ / /__/ /  / / /_/ / /_  
/_/   /_/|_|\__//____/\___/_/  /_/ .___/\__/  
                                /_/           0.1ß

EOF

echo "Sniff using localInterface or Pineapple ?"

#if local

# 1 Check dependancies installed
interface= ifconfig |
# 2 echo= Pick you interface:
# put interface in to monitor mode and pipe packets


#if pineapple

# 1 Check dependancies installed
# 2 echo= Pick Pinapple interface:
# put interface in to monitor mode and pipe packets

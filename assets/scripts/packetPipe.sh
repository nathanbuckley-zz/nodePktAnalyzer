#!/usr/bin/env bash

# A bash script for Piping airodump-ng(wifi only) / tcpdump(tcp only but multi interface) pcap files to the nodePktAnalyzer.
# Use for remote or local wifi Pineapples and wifi dongals that support 
# monitor and promiscuous mode (Ralink RT5370 chipset... etc).

cat << EOF

   ______           __    ____  __   __ _____           _       __ 
  / ____/________ _/ /_  / __ \/ /__/ // ___/__________(_)___  / /_
 / / __/ ___/ __ `/ __ \/ /_/ / //_/ __|__ \/ ___/ ___/ / __ \/ __/
/ /_/ / /  / /_/ / /_/ / ____/ ,< / /____/ / /__/ /  / / /_/ / /_  
\____/_/   \__,_/_.___/_/   /_/|_|\__/____/\___/_/  /_/ .___/\__/  
                                                     /_/          v0.1ß

EOF

echo "Sniff using localInterface or Pineapple ?"

#if local

# 1 Check dependancies installed
# 2 pick interface : interface= ifconfig |
# 3 echo= Pick you interface:
# 4 put interface in to monitor mode and pipe packets (sudo ifconfig wlanN down && sudo iwconfig wlanN mode monitor && iwconfig wlanN up (N = network interface number))
# 5 on exit put interface back to monitor mode


#if pineapple

# 1 SSH to pinapple
# 2 Check dependancies installed and up to date
# 3 echo= Pick Pinapple interface:
# 4 put interface in to monitor mode and pipe packets
# 5 on exit put interface back to monitor mode

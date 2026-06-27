#!/bin/bash

for i in {1..20}; do
  curl -L -o ~/Downloads/hamster-$i.gif 'https://media1.tenor.com/m/yDZ_I9QUMOgAAAAC/happy-hamster.gif'
done

for i in {1..20}; do
  open ~/Downloads/hamster-$i.gif
  sleep 0.05
  x=$((RANDOM % 1400))
  y=$((RANDOM % 700))
  osascript -e "tell app \"Preview\" to set bounds of front window to {$x, $y, $((x+465)), $((y+498))}"
done

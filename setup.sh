timestamp=$(date +%s)
first_three_digits=$(echo $timestamp | cut -c 1-3)
echo $first_three_digits

git clone https://github.com/open-suite/hub
cd hub/docker
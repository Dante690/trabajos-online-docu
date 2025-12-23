#!/bin/bash

# Convert Docusaurus emoji syntax to Unicode emojis
convert_emojis() {
    local file=$1
    
    # Replace common emojis
    sed -i 's/:confetti_ball:/🎉/g' "$file"
    sed -i 's/:briefcase:/💼/g' "$file"
    sed -i 's/:computer:/💻/g' "$file"
    sed -i 's/:bar_chart:/📊/g' "$file"
    sed -i 's/:bust_in_silhouette:/👤/g' "$file"
    sed -i 's/:pencil2:/✏️/g' "$file"
    sed -i 's/:handshake:/🤝/g' "$file"
    sed -i 's/:loudspeaker:/📢/g' "$file"
    sed -i 's/:rocket:/🚀/g' "$file"
    sed -i 's/:hammer_and_wrench:/🛠️/g' "$file"
    sed -i 's/:moneybag:/💰/g' "$file"
    sed -i 's/:credit_card:/💳/g' "$file"
    sed -i 's/:receipt:/🧾/g' "$file"
    sed -i 's/:information_source:/ℹ️/g' "$file"
    sed -i 's/:memo:/📝/g' "$file"
    sed -i 's/:mag_right:/🔍/g' "$file"
    sed -i 's/:mailbox_with_mail:/📬/g' "$file"
    sed -i 's/:globe_with_meridians:/🌐/g' "$file"
    sed -i 's/:newspaper:/📰/g' "$file"
    sed -i 's/:writing_hand:/✍️/g' "$file"
    sed -i 's/:email:/📧/g' "$file"
    sed -i 's/:bird:/🐦/g' "$file"
    sed -i 's/:speech_balloon:/💬/g' "$file"
    sed -i 's/:mag:/🔎/g' "$file"
    sed -i 's/:white_check_mark:/✅/g' "$file"
    sed -i 's/:x:/❌/g' "$file"
    sed -i 's/:warning:/⚠️/g' "$file"
    sed -i 's/:bulb:/💡/g' "$file"
    sed -i 's/:lock:/🔒/g' "$file"
    sed -i 's/:unlock:/🔓/g' "$file"
    sed -i 's/:key:/🔑/g' "$file"
    sed -i 's/:package:/📦/g' "$file"
    sed -i 's/:link:/🔗/g' "$file"
    sed -i 's/:coin:/🪙/g' "$file"
    sed -i 's/:chart_with_upwards_trend:/📈/g' "$file"
    
    echo "Converted emojis in $file"
}

# Convert all MDX files
find es/ en/ -name "*.mdx" -type f | while read file; do
    convert_emojis "$file"
done

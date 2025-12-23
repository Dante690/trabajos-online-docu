import os
import glob

# Emoji mappings
emoji_map = {
    ':confetti_ball:': '🎉',
    ':briefcase:': '💼',
    ':computer:': '💻',
    ':bar_chart:': '📊',
    ':bust_in_silhouette:': '👤',
    ':pencil2:': '✏️',
    ':handshake:': '🤝',
    ':loudspeaker:': '📢',
    ':rocket:': '🚀',
    ':hammer_and_wrench:': '🛠️',
    ':moneybag:': '💰',
    ':credit_card:': '💳',
    ':receipt:': '🧾',
    ':information_source:': 'ℹ️',
    ':memo:': '📝',
    ':mag_right:': '🔍',
    ':mailbox_with_mail:': '📬',
    ':globe_with_meridians:': '🌐',
    ':newspaper:': '📰',
    ':writing_hand:': '✍️',
    ':email:': '📧',
    ':e-mail:': '📧',
    ':bird:': '🐦',
    ':speech_balloon:': '💬',
    ':mag:': '🔎',
    ':white_check_mark:': '✅',
    ':x:': '❌',
    ':warning:': '⚠️',
    ':bulb:': '💡',
    ':lock:': '🔒',
    ':unlock:': '🔓',
    ':key:': '🔑',
    ':package:': '📦',
    ':link:': '🔗',
    ':coin:': '🪙',
    ':chart_with_upwards_trend:': '📈',
    ':office:': '🏢',
    ':incoming_envelope:': '📨',
    ':file_folder:': '📁',
}

def convert_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for emoji_code, emoji_char in emoji_map.items():
            content = content.replace(emoji_code, emoji_char)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Converted: {filepath}")
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Process all MDX files
for pattern in ['es/**/*.mdx', 'en/**/*.mdx']:
    for filepath in glob.glob(pattern, recursive=True):
        convert_file(filepath)

print("Emoji conversion complete!")

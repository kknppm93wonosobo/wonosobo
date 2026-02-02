import os
import re

# Daftar folder yang berisi file HTML
folders = ['asopa', 'fenty', 'vania', 'menyuk']

# Function untuk mengganti relative path menjadi absolute path
def fix_paths(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Mengganti semua ../folder/file menjadi /folder/file
    content = re.sub(r'href="\.\./([^"]+)"', r'href="/\1"', content)
    content = re.sub(r'src="\.\./([^"]+)"', r'src="/\1"', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed: {file_path}")

# Fix semua file HTML di subfolder
for folder in folders:
    html_path = os.path.join(folder, 'index.html')
    if os.path.exists(html_path):
        fix_paths(html_path)

print("\nSemua file HTML telah diperbaiki!")
print("\nSelanjutnya:")
print("1. Commit perubahan: git add .")
print("2. Commit: git commit -m 'Fix paths for Vercel deployment'")
print("3. Push ke repository: git push")
print("4. Deploy ke Vercel")

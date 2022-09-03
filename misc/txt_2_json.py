# https://www.geeksforgeeks.org/convert-text-file-to-json-in-python/
import json

filename = 'HD980_default.txt'
dict = {}
  
with open(filename) as fh:
    file = fh.readlines()
    for index, line in enumerate(file):
        if line == "\n":
            continue
        line = line.strip()
        split = line.split('=')
        key = split[0]
        val = split[1]
        key = key + '='
        dict[key] = val

print(dict)
out_file = open("template_config.json", "w")
json.dump(dict, out_file, indent=4, sort_keys = False)
out_file.close()
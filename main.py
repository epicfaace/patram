import xml.etree.ElementTree as ET

with open("SARIT-corpus/mahabharata-devanagari.xml", "r") as f:
    tree = ET.parse(f)

root = tree.getroot()
import pdb; pdb.set_trace()
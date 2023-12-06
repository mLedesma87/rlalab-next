import requests
from bs4 import BeautifulSoup as bs
import json
from scholarly import scholarly


def scrape_google_scholar(destination_file):
    author = scholarly.search_author_id("kWTPnDIAAAAJ")
    author = scholarly.fill(author)
    publications = author['publications']

    publications_json = {"response": {"results": []}}
    for i, pub in enumerate(publications):
        print(i+1 , "/", len(publications))
        pub = scholarly.fill(pub)
        puburl = pub['pub_url']
        pubtitle = pub['bib']['title']
        pubauthors = pub['bib']['author'].replace(" and ", ", ")
        pubcitation = pub['bib']['citation']
        if 'pub_year' in pub['bib']:
            pubyear = pub['bib']['pub_year']
        else:
            pubyear = 0
            
        publications_json["response"]["results"].append({
            "url": puburl,
            "title": pubtitle,
            "authors": pubauthors,
            "citation": pubcitation,
            "year": pubyear
        })

    # sort by year
    publications_json["response"]["results"] = sorted(publications_json["response"]["results"], key=lambda x: x["year"], reverse=True)

    with open(destination_file, 'w') as outfile:
        json.dump(publications_json, outfile)

destination_file = "public/publications_1.json"
scrape_google_scholar(destination_file)


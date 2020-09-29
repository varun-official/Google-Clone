/** @format */

export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - india",
        totalResults: "6680000000",
        searchTerms: "india",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "30cef69b9866651ad",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - india",
        totalResults: "6680000000",
        searchTerms: "india",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "30cef69b9866651ad",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.41015,
    formattedSearchTime: "0.41",
    totalResults: "6680000000",
    formattedTotalResults: "6,680,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "India - Wikipedia",
      htmlTitle: "<b>India</b> - Wikipedia",
      link: "https://en.wikipedia.org/wiki/India",
      displayLink: "en.wikipedia.org",
      snippet:
        "India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya), is \na country in South Asia. It is the second-most populous country, the ...",
      htmlSnippet:
        "<b>India</b> (Hindi: Bhārat), officially the Republic of <b>India</b> (Hindi: Bhārat Gaṇarājya), is <br>\na country in South Asia. It is the second-most populous country, the&nbsp;...",
      formattedUrl: "https://en.wikipedia.org/wiki/India",
      htmlFormattedUrl: "https://en.wikipedia.org/wiki/<b>India</b>",
      pagemap: {
        hcard: [
          {
            fn: "Republic of India",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI07MWnb_s1tjfQbVicW4XfOrO0Ey0ZQq72sslVMEF1mJ-PQ0iQlaxe8",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          },
        ],
        cse_image: [
          {
            src:
              "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "National Portal of India",
      htmlTitle: "National Portal of <b>India</b>",
      link: "https://www.india.gov.in/",
      displayLink: "www.india.gov.in",
      snippet:
        "National Portal of India is a Mission Mode Project under the National E-\nGovernance Plan, designed and developed by National Informatics Centre (NIC),\n ...",
      htmlSnippet:
        "National Portal of <b>India</b> is a Mission Mode Project under the National E-<br>\nGovernance Plan, designed and developed by National Informatics Centre (NIC),<br>\n&nbsp;...",
      cacheId: "z3ECrFkBOMIJ",
      formattedUrl: "https://www.india.gov.in/",
      htmlFormattedUrl: "https://www.<b>india</b>.gov.in/",
      pagemap: {
        metatags: [
          {
            handheldfriendly: "true",
            viewport: "width=device-width, initial-scale=1",
            mobileoptimized: "width",
            title: "National Portal of India",
            lang: "en",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Incredible India | English",
      htmlTitle: "Incredible <b>India</b> | English",
      link: "https://www.incredibleindia.org/",
      displayLink: "www.incredibleindia.org",
      snippet:
        "India has a myriad of landscapes, great heritage and culture, varied flora and \nfauna. The country is the most preferred tourist destinations for tourists from all ...",
      htmlSnippet:
        "<b>India</b> has a myriad of landscapes, great heritage and culture, varied flora and <br>\nfauna. The country is the most preferred tourist destinations for tourists from all&nbsp;...",
      cacheId: "3RhlGEoHLIMJ",
      formattedUrl: "https://www.incredibleindia.org/",
      htmlFormattedUrl: "https://www.incredible<b>india</b>.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrB3N5c5DXLvMUl1RzY0CtEpn7GZO4peSQYLfX7YBEn8YHPUuzm8zXvt0",
            width: "351",
            height: "144",
          },
        ],
        metatags: [
          {
            template: "home-page",
            "og:image":
              "http://localhost:4503/content/incredible-india-v2/en.thumb.800.480.png?ck=1600249331",
            "og:type": "website",
            "og:site_name": "Incredible India V2",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            "og:title": "English",
            "og:url":
              "http://localhost:4503/content/incredible-india-v2/en.html",
            "og:description":
              "India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/goa/goa-anjuna-beach-1.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "India | History, Map, Population, Economy, & Facts | Britannica",
      htmlTitle:
        "<b>India</b> | History, Map, Population, Economy, &amp; Facts | Britannica",
      link: "https://www.britannica.com/place/India",
      displayLink: "www.britannica.com",
      snippet:
        "6 days ago ... India, country that occupies the greater part of South Asia. It is a constitutional \nrepublic that represents a highly diverse population consisting of ...",
      htmlSnippet:
        "6 days ago <b>...</b> <b>India</b>, country that occupies the greater part of South Asia. It is a constitutional <br>\nrepublic that represents a highly diverse population consisting of&nbsp;...",
      cacheId: "qsYvT3y4ymQJ",
      formattedUrl: "https://www.britannica.com/place/India",
      htmlFormattedUrl: "https://www.britannica.com/place/<b>India</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvpw81hl5BifDYtRvzypV-pNpzCP3pp6anqBMQePnp0MM7ZwnQQjZZKxN",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "5247c07bac63b6b3250f68cfe355c9a2",
            "og:image":
              "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg",
            "twitter:card": "summary_large_image",
            "og:type": "ARTICLE",
            "og:site_name": "Encyclopedia Britannica",
            "og:title": "India | History, Map, Population, Economy, & Facts",
            "og:image:type": "image/jpeg",
            "fb:pages": "74442380906",
            "og:description":
              "India, country that occupies the greater part of South Asia. It is a constitutional republic that represents a highly diverse population consisting of thousands of ethnic groups. Its capital is New Delhi. With roughly one-sixth of the world’s total population, it is the second most populous country, after China.",
            "twitter:image":
              "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg",
            "fb:app_id": "1887621861548296",
            "twitter:site": "@britannica",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "India, country that occupies the greater part of South Asia. It is a constitutional republic that represents a highly diverse population consisting of thousands of ethnic groups. Its capital is New Delhi. With roughly one-sixth of the world’s total population, it is the second most populous country, after China.",
            "og:url": "https://www.britannica.com/place/India",
          },
        ],
        cse_image: [
          {
            src:
              "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Welcome to Air India",
      htmlTitle: "Welcome to Air <b>India</b>",
      link: "http://www.airindia.in/",
      displayLink: "www.airindia.in",
      snippet:
        "Air India Star Alliance. Skip to Content ~Screen Reader Access. This website \nuses Javascript. This website uses Javascript. Select Country. India, USA/\nCanada ...",
      htmlSnippet:
        "Air <b>India</b> Star Alliance. Skip to Content ~Screen Reader Access. This website <br>\nuses Javascript. This website uses Javascript. Select Country. <b>India</b>, USA/<br>\nCanada&nbsp;...",
      cacheId: "akx2MPDVZdIJ",
      formattedUrl: "www.airindia.in/",
      htmlFormattedUrl: "www.air<b>india</b>.in/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlYpaBPd6gkiB8Z-Sz-k_XpGmhyh9zA1Yg-Y0EjTpckXe2SGVj9E9MbD0",
            width: "318",
            height: "159",
          },
        ],
        metatags: [
          {
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
            keyword: "Welcome to Air India",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "http://www.airindia.in/writereaddata/Portal/Home_Banner/565_1_1_No-Expiry-of-points-banner.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Government of India, Department of Post",
      htmlTitle: "Government of <b>India</b>, Department of Post",
      link: "https://www.indiapost.gov.in/",
      displayLink: "www.indiapost.gov.in",
      snippet: "India Post, Ministry of Communication & Technology.",
      htmlSnippet:
        "<b>India</b> Post, Ministry of Communication &amp; Technology.",
      cacheId: "e1gX7XI2p9IJ",
      formattedUrl: "https://www.indiapost.gov.in/",
      htmlFormattedUrl: "https://www.<b>india</b>post.gov.in/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIcD4Y1xDFDx_m0z8QB8q-mMLXy8eizX78B1DEPSkptOdI7FaIWPFNnvcW",
            width: "179",
            height: "244",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            author: "India Post, Ministry of Communication & Technology",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.indiapost.gov.in/PublishingImages/MinisterOfState.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "India - BBC News",
      htmlTitle: "<b>India</b> - BBC News",
      link: "https://www.bbc.com/news/world/asia/india",
      displayLink: "www.bbc.com",
      snippet:
        "India is staring at its sharpest growth contraction on record. With more than five \nmillion Covid-19 cases so far, the country has announced a nearly 24 per cent ...",
      htmlSnippet:
        "<b>India</b> is staring at its sharpest growth contraction on record. With more than five <br>\nmillion Covid-19 cases so far, the country has announced a nearly 24 per cent&nbsp;...",
      formattedUrl: "https://www.bbc.com/news/world/asia/india",
      htmlFormattedUrl: "https://www.bbc.com/news/world/asia/<b>india</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTci4iZWnnJwADVgtU2-OKQapnOe9u0DRLuhVVolGKS6tSXatkpkInkcwvR",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
            "theme-color": "#bb1919",
            "twitter:card": "summary_large_image",
            "og:site_name": "BBC News",
            "apple-mobile-web-app-title": "BBC News",
            "msapplication-tileimage":
              "//m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/1.2.0/windows-eight-icon-144x144.png",
            "twitter:creator": "@BBCNews",
            "og:description":
              "Get the latest Asian news from BBC News in Asia: breaking news, features, analysis and special reports plus audio and video from across the Asian continent.",
            "twitter:image:alt": "BBC News",
            "twitter:site": "@BBCNews",
            "fb:admins": "100004154058350",
            "msapplication-tilecolor": "#bb1919",
            "application-name": "BBC News",
            "og:type": "website",
            "article:section": "India",
            "twitter:title": "India News - BBC News",
            "twitter:domain": "www.bbc.co.uk",
            "og:title": "India News - BBC News",
            "fb:pages":
              "1143803202301544,317278538359186,1392506827668140,742734325867560,185246968166196,156060587793370,137920769558355,193435954068976,21263239760,156400551056385,929399697073756,154344434967,228735667216,80758950658,260212261199,294662213128,1086451581439054,283348121682053,295830058648,239931389545417,304314573046,310719525611571,647687225371774,1159932557403143,286567251709437,1731770190373618,125309456546,163571453661989,285361880228,512423982152360,238003846549831,176663550714,260967092113,118450564909230,100978706649892,15286229625,122103087870579,120655094632228,102814153147070,124715648647,153132638110668,150467675018739",
            "article:author": "https://www.facebook.com/bbcnews",
            "twitter:image:src":
              "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
            viewport: "width=device-width, initial-scale=1, user-scalable=1",
            "twitter:description":
              "Get the latest Asian news from BBC News in Asia: breaking news, features, analysis and special reports plus audio and video from across the Asian continent.",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_GB",
            "og:url": "https://www.bbc.com/news/world/asia/india",
          },
        ],
        cse_image: [
          {
            src:
              "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Reserve Bank of India",
      htmlTitle: "Reserve Bank of <b>India</b>",
      link: "https://www.rbi.org.in/",
      displayLink: "www.rbi.org.in",
      snippet:
        "RBI releases Handbook of Statistics on the Indian Economy 2019-20 ... Address \nby Shri Shaktikanta Das, Governor, Reserve Bank of India - September 16, 2020\n ...",
      htmlSnippet:
        "RBI releases Handbook of Statistics on the <b>Indian</b> Economy 2019-20 ... Address <br>\nby Shri Shaktikanta Das, Governor, Reserve Bank of <b>India</b> - September 16, 2020<br>\n&nbsp;...",
      cacheId: "_j9ZFj02IBAJ",
      formattedUrl: "https://www.rbi.org.in/",
      htmlFormattedUrl: "https://www.rbi.org.in/",
      pagemap: {
        metatags: [
          {
            "apple-itunes-app": "app-id=1154394549",
            viewport: "width=device-width, initial-scale=1",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "South Asia :: India — The World Factbook - Central Intelligence ...",
      htmlTitle:
        "South Asia :: <b>India</b> — The World Factbook - Central Intelligence ...",
      link:
        "https://www.cia.gov/library/publications/the-world-factbook/geos/in.html",
      displayLink: "www.cia.gov",
      snippet:
        "South Asia :: India Print. Page last updated on September 16, 2020. India Flag. \nThe World Factbook Country/Location Flag Modal ×. South Asia :: India Print.",
      htmlSnippet:
        "South Asia :: <b>India</b> Print. Page last updated on September 16, 2020. <b>India</b> Flag. <br>\nThe World Factbook Country/Location Flag Modal ×. South Asia :: <b>India</b> Print.",
      cacheId: "0n2U45w_dvkJ",
      formattedUrl:
        "https://www.cia.gov/library/publications/the-world-factbook/geos/in.html",
      htmlFormattedUrl:
        "https://www.cia.gov/library/publications/the-world-factbook/geos/in.html",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLc8tTmLYtHEtZXO9hvNMMiaOnMqsDg9HN9v3X4LUOXSxsm3VgwgaAO8T9",
            width: "214",
            height: "235",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width",
            lastmodified: "FEB 1, 2018",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.cia.gov/library/publications/the-world-factbook/attachments/locator-maps/IN-locator-map.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "SBI - Loans, Accounts, Cards, Investment, Deposits, Net Banking ...",
      htmlTitle:
        "SBI - Loans, Accounts, Cards, Investment, Deposits, Net Banking ...",
      link: "https://sbi.co.in/",
      displayLink: "sbi.co.in",
      snippet:
        "State Bank of India, a financial powerhouse, provides banking services like \nsaving account, fixed deposits, personal loans, education loan, SME loans, ...",
      htmlSnippet:
        "State Bank of <b>India</b>, a financial powerhouse, provides banking services like <br>\nsaving account, fixed deposits, personal loans, education loan, SME loans,&nbsp;...",
      cacheId: "gXzQpgxuFGwJ",
      formattedUrl: "https://sbi.co.in/",
      htmlFormattedUrl: "https://sbi.co.in/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ46_QO1w6WkZ7_idpHGgmTKI2OP7dYCdQDo0YeIzbDYYHFZxg0VACqIXRJ",
            width: "304",
            height: "166",
          },
        ],
        metatags: [
          {
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=2.0, minimum-scale=1, user-scalable=yes",
          },
        ],
        cse_image: [
          {
            src:
              "https://sbi.co.in/documents/136/73090/offers.jpg/fe83d3b6-a3ec-715c-d63b-833dbcb3394e?t=1579158922387",
          },
        ],
      },
    },
  ],
};

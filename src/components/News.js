import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Chris Flanagan",
            "title": "Will Wrexham ever reach the Premier League? Phil Parkinson tells FourFourTwo the exact ambition of Rob McElhenney and Ryan Reynolds",
            "description": "The Welsh club's boss is hoping to guide the Red Dragons up the Football League",
            "url": "https://www.fourfourtwo.com/news/wrexham-parkinson-premier-league",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/X8Q5oLFXUvJt2dFdPBZwfL-1200-80.jpg",
            "publishedAt": "2024-01-05T08:00:06Z",
            "content": "Wrexham are well placed for a second successive promotion this season – and boss Phil Parkinson believes it’s possible for the club to reach the Premier League one day.\r\nParkinson guided the Welsh si… [+1814 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Greg Lea",
            "title": "Three Englishmen named in the top 10 most valuable players in the world right now",
            "description": "A report has revealed the 10 footballers with the highest value in 2024",
            "url": "https://www.fourfourtwo.com/news/three-englishman-named-in-the-top-10-most-valuable-players-in-the-world-right-now",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/RXoaJXiYtvFrrLHMz5GyPG-1200-80.jpg",
            "publishedAt": "2024-01-05T07:00:29Z",
            "content": "Three English players have been included in a list of the top 10 most valuable footballers in the world.\r\nThe CIES Football Observatory has used its own statistical model to estimate the transfer val… [+2846 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "Unique Stats from the 2023 College Football Regular Season",
            "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
            "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
            "publishedAt": "2023-12-12T12:00:00Z",
            "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
            "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
            "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-06T09:06:42Z",
            "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
            "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
            "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-05T17:57:19Z",
            "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"

        }]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            page:1
        }

    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=64cc70dd99f949488819dbd4d75097ba&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,totalResults:parseData.totalResults })
    }
    handlePrev=async ()=>{
        if(this.state.page>1){
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=64cc70dd99f949488819dbd4d75097ba&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,page:this.state.page-1 })
        }
    }
    handleNext=async ()=>{
        if(this.state.page+1 >Math.ceil(this.state.totalResults/20)){}
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=64cc70dd99f949488819dbd4d75097ba&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,page:this.state.page+1 })
        }
    }
    render() {

        return (
            <div className='container my-3'>
                <h2>NewsMonkey-news headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-3">
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-dark"onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

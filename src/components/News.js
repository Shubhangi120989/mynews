import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loadinggif from './Loadinggif'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:"in",
    pagesize:9,
    category:"general"
  }
  static propTypes={
     country:PropTypes.string,
     pagesize:PropTypes.number
  }
  articles=[
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Steffen Herget",
    "title": "heise+ | Sechs leistungsstarke Tablets mit Android und iOS im Vergleich",
    "description": "Mittelklasse Tablets um die 500 Euro können in vielen Aspekten mit High-End-Tablets mithalten. Wir haben sechs Modelle beider Kategorien verglichen.",
    "url": "https://www.heise.de/tests/Sechs-leistungsstarke-Tablets-mit-Android-und-iOS-im-Vergleich-9315462.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/cdn/n/n/_www-heise-de_/imgs/18/4/3/0/8/2/5/1/7e4b45964b9fb53eada4d501cecab82acd1491914456ecc37f9ec8f35d0b504f-ea950df1307d5f86.gif",
    "publishedAt": "2023-10-09T07:00:00Z",
    "content": "Inhaltsverzeichnis\r\nMehr zu iPads und Tablets:\r\nWie viel High-End muss es sein? Die Frage stellt sich auch bei Tablets, denn die Preisspanne ist enorm. Günstige Modelle wechseln für kaum mehr als hun… [+3571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iPhone 15 uses new Qualcomm modem for upgraded 5G performance",
    "description": "One of the small but notable changes to the iPhone 15 Pro is the switch to Aualcomm’s new X70 modem for improved 5G performance. As it turns out, this change also applies to the entry-level iPhone 15 and iPhone 15 Plus. \n\n\n\n more…",
    "url": "https://9to5mac.com/2023/10/08/iphone-15-upgraded-5g-performance/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/F78uK9gbwAAaY9s.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-10-09T00:08:47Z",
    "content": "One of the small but notable changes to the iPhone 15 Pro is the switch to Aualcomm’s new X70 modem for improved 5G performance. As it turns out, this change also applies to the entry-level iPhone 15… [+1782 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Sarang Sheth",
    "title": "The AirTag Gets Tough Competition from This Razor Slim Credit-Card-Sized Tracker with Apple Find My",
    "description": "The AirTag Gets Tough Competition from This Razor Slim Credit-Card-Sized Tracker with Apple Find MyWhat I find disappointing about the AirTag is that it’s the one recent product Apple truly needs to redesign, but hasn’t in the past two...",
    "url": "https://www.yankodesign.com/2023/10/08/the-airtag-gets-tough-competition-from-this-razor-slim-credit-card-sized-tracker-with-apple-find-my/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2023/10/tracker_as_thin_as_a_credit_card_hero.jpg",
    "publishedAt": "2023-10-09T01:45:56Z",
    "content": "What I find disappointing about the AirTag is that it’s the one recent product Apple truly needs to redesign, but hasn’t in the past two years. The Watch, AirPods, iPhone, iPad, and MacBook have ALL … [+3870 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Brandon Vigliarolo",
    "title": "Chinese smart TV boxes infected with malware in PEACHPIT ad fraud campaign",
    "description": "PLUS: Sony admits to MoveITbreach; Blackbaud fined again, Qakbot's sorta back from the dead; and more\nInfosec in brief Bot defense software vendor Human Security last week detailed an attack that \"sold off-brand mobile and Connected TV (CTV) devices on popula…",
    "url": "https://www.theregister.com/2023/10/09/in_brief_security/",
    "urlToImage": "https://regmedia.co.uk/2021/11/17/time_shutterstock.jpg",
    "publishedAt": "2023-10-09T01:27:10Z",
    "content": "Infosec in brief Bot defense software vendor Human Security last week detailed an attack that \"sold off-brand mobile and Connected TV (CTV) devices on popular online retailers and resale sites preloa… [+8535 chars]"
    }
    
    
    ]
    constructor(){
      super()//it is necessary to call super function 
      this.state={
        articles: this.articles,
        loading:false,
        page:1
      }
    }

    // fetching api
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4ca87be4db4a2e8091bcfbdf238b88&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});

    }
    handleNext=async()=>{
      console.log("next")
      if(this.state.page+1>Math.ceil(this.state.totalResults/9)){

      }else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4ca87be4db4a2e8091bcfbdf238b88&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles,
        loading:false
      })

      }
      
      

    }
    handlePrev=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4ca87be4db4a2e8091bcfbdf238b88&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
      let data=await fetch(url);
      this.setState({loading:true})
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false
      })

    }
  render() {
    return (
      <div className='container my-3'>
        <h2 style={{textAlign:'center',margin:'30px'}}>NewsNinja- Top Headlines</h2>
        <div className="container">
        {this.state.loading&&<Loadinggif/>}
        </div>
        <div className="row">
        {(!this.state.loading)&&this.state.articles.map((element)=>{
          if(element==""){
            return;
          }
          let len=element.title.length;
          let f=133-len;
          if(element.title){
          return <div className="col-md-4" key={element.url}> {/*unique key should be given to the div that is being returned*/}
          
          <NewsItem  title={element.title} description={element.description?element.description.slice(0,f)+"...":""} imageurl={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2017/06/10/07/22/news-2389226_1280.png"} newsUrl={element.url}/>

          </div>
          }
        })}
        
        </div>
        <div className="container d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}>Previous&larr;</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/9)} type="button" class="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div>

      </div>
    )
  }
}

export default News


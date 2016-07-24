import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/scoreBox.jsx';
import Results from './quiz/results.jsx';

class App extends Component {
constructor(props) {
    super(props);
    this.state= {
        questions: [
            {
                 id:1,
                text:"What is the Capital of India?",
                choices:[
                    {
                    id:'a',
                    text: 'Mumbai'
                },
                       {
                    id:'b',
                    text: 'Patna'
                },
                       {
                    id:'c',
                    text: 'Delhi'
                }
                ],
                correct:'c'
            },
            
                 {
                 id:2,
                text:"Who invented telephone?",
                choices:[
                    {
                    id:'a',
                    text: 'Graham Bell'
                },
                       {
                    id:'b',
                    text: 'R.R Martin'
                },
                       {
                    id:'c',
                    text: 'Guglielmo Marconi'
                }
                ],
                correct:'a'
            },
            
                 {
                 id:3,
                text:"Which was the 1st non Test playing country to beat India in an international match?",
                choices:[
                    {
                    id:'a',
                    text: 'Zimbawe'
                },
                       {
                    id:'b',
                    text: 'Sri Lanka'
                },
                       {
                    id:'c',
                    text: 'West Indies'
                }
                ],
                correct:'b'
            },
                 {
                 id:4,
                text:"The most electronegative element among the following is?",
                choices:[
                    {
                    id:'a',
                    text: 'Sodium'
                },
                       {
                    id:'b',
                    text: 'Bromine'
                },
                       {
                    id:'c',
                    text: 'Fluorine'
                }
                ],
                correct:'c'
            }
            
        ],
        score:0,
        current:1
    }
}
    
    setCurrent(current) {
        this.setState({current});
    }
    
    setScore(score) {
        this.setState({score});
    }
    
    render(){
      if(this.state.current > this.state.questions.length) {
          var scorebox ='';
          var results= <Results {...this.state} />
      }
    else {
        var scorebox = <Scorebox {...this.state}       
/> 
            var results='';
    }
        return(
        <div>
           {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
        {results}
        </div>
       )
    }
}

export default App
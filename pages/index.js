import Layout from '../components/layout'
import Fetch from 'isomorphic-unfetch'
import Character from '../components/character'

const Index = (props) => (

    <Layout>
        <div className="top-content">
            <p>May the force be with you ....</p>
            <Character peopleThings={props.people} />
            <style jsx global>{`
            .top-content {
                padding: 20px;
                text-align: center;
                color: #679cde;
            }
            .lower-links {
                list-style: none;
                margin:0;
                padding:0;
            }
            .lower-links li {
                display: inline-block;
                background: #679cde;
                border-radius: 10px;
                padding: 10px;
                margin: 5px;
            }
            .lower-links li a {
                color: #000;
                text-decoration: none;
            }
            .lower-links li:hover {
                background:#fff;
                transition: all .2s;
            }
        }
    `}</style>
        </div>
    </Layout>)

Index.getInitialProps = async function () {

    const res = await fetch('https://swapi.co/api/people');
    const data = await res.json();
    return {
        people: data.results
    }

}


export default Index;
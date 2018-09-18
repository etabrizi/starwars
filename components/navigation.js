import Link from 'next/link'

const Navigation = () => (
    <div>
        <nav>
            <ul>
                <Link href="/"><li><a href="#">Home</a></li></Link>
                <Link href="about"><li><a href="#">About</a></li></Link>
            </ul>
        </nav>
        <style jsx>{`
            ul { 
                list-style: none; 
                margin: 0;
                padding: 0;
            }
            ul li {
                display: inline-block;
            }
            ul li a {
                color: #fff;
                text-decoration: none;
                margin-right: 10px;
            }
            nav {
                text-align: center;
            }
        `}</style>
    </div>
)
export default Navigation;
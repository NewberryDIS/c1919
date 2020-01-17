import React from 'react'
import styled from '@emotion/styled'

const Twittercss = styled.div`
    display: flex;
    background: white;
    .twitterwrappper {
        margin: 50px auto 20px auto;
        width: 75%;
        a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    h2 {
        text-align: center;
        font-size: 1.5em;
        color: black;
        margin: 0 auto 20px auto;
        a {
            font-family: 'Oswald', sans-serif;
            font-weight: 900;
            font-size: 1.5rem;
            color: black;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .twitterFlex {
        display: flex;
        justify-content: space-evenly; 
    }
    @media only screen and (max-width: 500px) {
        .twitterwrappper {
            margin-top:20px;
        }
        .twitterwrappper h2 {
            font-size:2em !important;
        }
        .twitterFlex {
            display:block;
        }
    }
`

const Twittersection = () => (
<Twittercss>
    <div className="twitterwrappper">
        <h2>
            <a href="https://twitter.com/hashtag/Chi1919?src=hash" rel="noopener noreferrer" target="_blank">
                #chi1919 Tweets
            </a>
        </h2>
        <div className='twitterFlex'>
            <blockquote className="twitter-tweet"  ><p>Thank you to everyone who joined us + <a href="https://twitter.com/blackstonebikes?ref_src=twsrc%5Etfw">@blackstonebikes</a> today for a ride to the key sites of violence/resistance/significance associated w/ the 1919 Chicago race riots: 31 St. Beach, Ida B. Wells house, Union Stockyards, the Forum in Bronzeville, &amp; more. <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a> <a href="https://twitter.com/NEH_PubPrograms?ref_src=twsrc%5Etfw">@NEH_PubPrograms</a> <a href="https://t.co/qUhTLco1C2">pic.twitter.com/qUhTLco1C2</a></p>&mdash; Newberry Library (@NewberryLibrary) <a href="https://twitter.com/NewberryLibrary/status/1145088531506839553?ref_src=twsrc%5Etfw">June 29, 2019</a></blockquote>
            <blockquote className="twitter-tweet"  ><p>“History will repeat itself if you don’t teach it.” <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a> <a href="https://t.co/sde4pWcQxv">https://t.co/sde4pWcQxv</a></p>&mdash; Chicago Reader (@Chicago_Reader) <a href="https://twitter.com/Chicago_Reader/status/1175454756661280768?ref_src=twsrc%5Etfw">September 21, 2019</a></blockquote>
            <blockquote className="twitter-tweet"  ><p>&quot;The lifeguard had gotten the boy’s body, and naturally all the people were here on this island. Then they...demanded that they arrest the man. And this is when the fight started.&quot; <a href="https://twitter.com/robertloerzel?ref_src=twsrc%5Etfw">@robertloerzel</a> &#39;s piece in <a href="https://twitter.com/ChicagoMag?ref_src=twsrc%5Etfw">@ChicagoMag</a> gives 1st-hand stories of <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a>. <a href="https://t.co/f9WYMHFAPh">https://t.co/f9WYMHFAPh</a></p>&mdash; Newberry Library (@NewberryLibrary) <a href="https://twitter.com/NewberryLibrary/status/1162088069245394945?ref_src=twsrc%5Etfw">August 15, 2019</a></blockquote>
        </div>
    </div>
</Twittercss>
)

export default Twittersection

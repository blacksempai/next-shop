import { useEffect, useState } from "react";

interface Currency {
    r030: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
}


export default function Currencies({serverData}: {serverData: Currency[] | null}) {
    const [data, setData] = useState(serverData);

    useEffect(() => {
        if(!serverData) {
            fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(res => res.json())
            .then(res => setData(res));
        }
    }, []);

    return (
        <div>
            <h1>Currencies</h1>
            {!data ? "Loading..." : data?.map(c => <p key={c.r030}>{c.txt} : {c.rate}</p>)}
        </div>
    )
}

Currencies.getInitialProps = async (context: {req: any}) => {
    console.log(context)
    if(!context.req) {
        return {serverData: null};
    }
    const res = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const serverData = await res.json();
    return {serverData};
}
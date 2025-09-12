import type {NextPage} from "next";
import {useState, useEffect} from "react";
import { fetchNames } from "@/util/fetch-names";

type responseItemType = {
    id: string,
    name: string
};

const NamesCSR: NextPage = () => {
    const [data, setData] = useState<responseItemType[]| []>();
    
    useEffect(() => {
        const fetchData = async () => {
            let names;
            try {
                names = await fetchNames();
            } catch (error) {
                console.log(error)
            }
            setData(names);
        };

        fetchData();
    });

    const output = data?.map((item: responseItemType, idx: number)=>{
        return (
            <li key={`name-${idx}`}>{item.id}:{item.name}</li>
        );
    });
    return (
        <ul>{output}</ul>
    );
};

export default NamesCSR;
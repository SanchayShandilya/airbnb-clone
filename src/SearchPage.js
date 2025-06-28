import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage'>
                <div
                    className='searchPage__info'>
                    <p>62 stays 26 August to 30 august 2 guest</p>
                    <h1>Stays Nearby</h1>
                    <Button
                        variant="outlined">Cancellation Flexibility</Button>
                    <Button variant="outlined">Type of place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Rooms and beds</Button>
                    <Button variant="outlined">More filters</Button>
                </div>
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
                <SearchResult
                    img="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    location="Private room"
                    title="Spacious House"
                    description="1 guest 1 bedroom 1 be 1.5 shared bathrooms wifi kitchen free parking"
                    star={4.73}
                    price="10000/night"
                    total="13500 total" 
                />
            </div>

        </div>
    )
}

export default SearchPage

import React, { Component } from "react";
import { render } from "react-dom";
import { createClient } from "contentful";


const client = createClient({
    space: process.env.REACT_APP_PUBLIC_KEY,
    accessToken: process.env.REACT_APP_ACCESSTOKEN
});

export default client;
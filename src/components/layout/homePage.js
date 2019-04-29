import React, { Component } from 'react';
import { action, createStore, StoreProvider, useStore, useActions } from 'easy-peasy';

function HomePage() {

    const userData = useStore(store => store.user.userData)
    console.log(userData,1);

    return (
        <div>
            hello {userData.displayName}
        </div>
    )
}

export default HomePage
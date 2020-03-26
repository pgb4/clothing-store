import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className="collection-preview">
        <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx <4)
                .map((item) => (
                <CollectionItem item={item} key={item.id}/>
            ))}
        </div>
    </div>
)


export default CollectionPreview
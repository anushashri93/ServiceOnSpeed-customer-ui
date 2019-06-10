import React from 'react';
import createIconSetFromFontello from '../node_modules/@expo/vector-icons/createIconSetFromFontello';
import fontelloConfig from '../fonts/fontello/config/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default (props) => <Icon type="fontello" {...props}/>
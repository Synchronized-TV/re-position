import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../utils';
import PositionableContainer from './PositionableContainer';

const Container = ({ children }) => (
    <div
        style={{
            backgroundColor: '#d0d0d0',
            height: '400px',
            position: 'relative',
            width: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            overflow: 'hidden',
        }}
    >
        {children}
    </div>
);

storiesOf('react-positionable', module).addWithJSX(
    'PositionableContainer',
    wInfo(`
    ### Notes

    The power of \`react-positionable\` with a
    useful implementation and UI out of the box.

    ### Usage
    ~~~js
    <PositionableContainer
        movable
        resizable
        rotatable
        position={{
            height: '25%',
            left: '0%',
            top: '0%',
            width: '25%',
        }}
    >
        <p>This can be just about anything!</p>
    </PositionableContainer>
    ~~~`)(() => (
        <Container>
            <PositionableContainer
                movable
                resizable="both"
                rotatable
                position={{
                    left: '30%',
                    top: '30%',
                    height: '40%',
                    width: '40%',
                    rotation: '-45deg',
                }}
            >
                <div
                    style={{
                        backgroundImage: 'url(https://picsum.photos/500/300)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundColor: '#c0ffee',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                />
            </PositionableContainer>
        </Container>
    ))
);

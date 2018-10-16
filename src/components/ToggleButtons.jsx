import React from 'react';

import ToggleModeButton from './ToggleModeButton';
import { MODES } from './../actions';

export default function ToggleButtons() {
    return (
        <div className="form-group">
            <div className="btn-group" role="group">
                <ToggleModeButton mode={MODES.MOVIE}>Movies</ToggleModeButton>
                <ToggleModeButton mode={MODES.TV}>TV Shows</ToggleModeButton>
            </div>
        </div>
    );
}
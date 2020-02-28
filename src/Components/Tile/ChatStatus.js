/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isUserOnline } from '../../Utils/User';
import { getChatUserId } from '../../Utils/Chat';
import UserStore from './../../Stores/UserStore';
import './ChatStatus.css';

class ChatStatus extends React.Component {
    constructor(props) {
        super(props);

        const userId = getChatUserId(props.chatId);
        const user = UserStore.get(userId);

        this.state = {
            userId,
            online: isUserOnline(user)
        };
    }

    componentDidMount() {
        UserStore.on('updateUserStatus', this.onUpdateUserStatus);
    }

    componentWillUnmount() {
        UserStore.off('updateUserStatus', this.onUpdateUserStatus);
    }

    onUpdateUserStatus = update => {
        const { userId } = this.state;
        const { user_id } = update;
        if (user_id !== userId) return;

        const user = UserStore.get(userId);
        if (!user) return;

        this.setState({ online: isUserOnline(user) });
    };

    render() {
        const { size, borderSize } = this.props;
        const { online } = this.state;
        if (!online) return null;

        return (
            <div className='chat-status' style={{ width: size, height: size }}>
                <div className='chat-status-icon' style={{ padding: borderSize }}>
                    <div className='chat-status-indicator' />
                </div>
            </div>
        );
    }
}

ChatStatus.propTypes = {
    chatId: PropTypes.number.isRequired,
    size: PropTypes.number,
    borderSize: PropTypes.number
};

ChatStatus.defaultProps = {
    size: 14,
    borderSize: 2
};

export default ChatStatus;

import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    // eslint-disable-next-line react/prop-types
    const chatProps = useMultiChatLogic('ff300fa3-7c71-4368-a926-d08984d602cb', props.user.username, props.user.secret)
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow style={{height: '100%'}} {...chatProps} />
    </div>
}
export default ChatsPage
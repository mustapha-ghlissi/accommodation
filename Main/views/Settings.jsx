import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FAB, TextInput } from 'react-native-paper'
import { connect } from 'react-redux';
import { styles } from '../assets/styles'
import { SETTINGS_FORM } from '../constants/forms';
import { handleTextInput, saveIpAddress } from '../redux/actions/actionCreators';

class Settings extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {
            navigation, 
            saveIp,
            form,
            handleInput
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TextInput 
                        label='API ip-address'
                        mode='outlined'
                        placeholder='http://192.168.0.23:8080'
                        value={form.ipAddress || ''}
                        onChangeText={text => handleInput('ipAddress', text.trim())}
                    />
                </View>
                <FAB
                    style={styles.fab}
                    color='#fff'
                    icon="check"
                    disabled={!form.ipAddress || form.ipAddress.trim() === ''}
                    onPress={() => saveIp(navigation)}
                />
            </View>
        )
    }
}


const mapStateToProps = ({main}) => ({
    form: main[SETTINGS_FORM]
})

const mapDispatchToProps = dispatch => ({
    saveIp: (navigation) => dispatch(saveIpAddress(navigation)),
    handleInput: (input, value) => dispatch(handleTextInput(SETTINGS_FORM, input, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
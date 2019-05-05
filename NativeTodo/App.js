import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native';

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#03DAC5',
        padding: 20,
        paddingTop: 40,
        flexDirection: 'row'
    },
    title: {
        marginLeft: 20,
        fontSize: 21,
        fontWeight: 'bold',
        flex: 1,
    },
    content: {
        padding: 20
    },
    item: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 20,
        fontSize: 18,
        flex: 1
    },
    newTask: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    inputStyle: {
        padding: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        flex: 1
    }
});

export default class App extends React.Component {
    state = {
        input: '',
        data: []
    }

    componentWillMount() {
        fetch('http://192.168.100.6:8000/tasks')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                });
            });
    }

    keyExtractor = (item, index) => item._id;

    todoItem = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.done(item._id)}>
                    <MaterialIcons name="check-box-outline-blank" size={32} />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.subject}</Text>
                <TouchableOpacity onPress={this.delete(item._id)}>
                    <MaterialIcons name="delete" size={32} color="red" />
                </TouchableOpacity>
            </View>
        )
    }

    doneItem = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.undo(item._id)}>
                    <MaterialIcons name="check-box" size={32} />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.subject}</Text>
                <TouchableOpacity onPress={this.delete(item._id)}>
                    <MaterialIcons name="delete" size={32} color="red" />
                </TouchableOpacity>
            </View>
        )
    }

    clear = () => {
        this.setState({
            data: this.state.data.filter(item => item.status === 0)
        })
    }

    done = (_id) => () => {
        this.setState({
            data: this.state.data.map(item => {
                if(item._id === _id) item.status = 1;
                return item;
            })
        })
    }

    undo = (_id) => () => {
        this.setState({
            data: this.state.data.map(item => {
                if(item._id === _id) item.status = 0;
                return item;
            })
        })
    }

    delete = (_id) => () => {
        this.setState({
            data: this.state.data.filter(item => item._id !== _id)
        })
    }

    add = () => {
        let text = this.state.input;
        this.setState({
            input: '',
            data: [
                ...this.state.data,
                { "_id": "99", "subject": text, "status": 0 }
            ]
        });
    }

    render() {
        return (
            <View>
                <View style={styles.toolbar}>
                    <MaterialIcons name="done-all" size={32} />
                    <Text style={styles.title}>Native Todo</Text>
                    <TouchableOpacity onPress={this.clear}>
                        <MaterialIcons name="clear-all" size={32} />
                    </TouchableOpacity>
                </View>

                <View style={styles.newTask}>
                    <TextInput
                        placeholder="Task"
                        style={styles.inputStyle}
                        value={this.state.input}
                        onChangeText={(text) => {
                            this.setState({
                                input: text
                            });
                        }} />
                    <TouchableOpacity onPress={this.add}>
                        <MaterialIcons name="playlist-add" size={32} />
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={styles.content}>
                    <FlatList
                        data={this.state.data.filter(item => item.status === 0)}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.todoItem}
                    />

                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#999' }}>Done</Text>
                    </View>

                    <FlatList
                        data={this.state.data.filter(item => item.status === 1)}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.doneItem}
                    />
            </ScrollView>
            </View>
        );
    }
}

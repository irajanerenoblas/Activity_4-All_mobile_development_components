import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{gap: 10, flex: 1, margin: 10}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>

  );
};

export default MyComponent;

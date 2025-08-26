import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Option = {
  id: number;
  text: string;
  votes: number;
};

type PollProps = {
  question: string;
  options: Option[];
};

const Poll: React.FC<PollProps> = ({ question, options }) => {
  const [pollOptions, setPollOptions] = useState<Option[]>(options);
  const [voted, setVoted] = useState<boolean>(false);

  const handleVote = (id: number) => {
    if (voted) return;

    const updatedOptions = pollOptions.map(option =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    );
    setPollOptions(updatedOptions);
    setVoted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {pollOptions.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => handleVote(option.id)}
          disabled={voted}
        >
          <Text style={styles.optionText}>
            {option.text} {voted ? `- ${option.votes} votes` : ''}
          </Text>
        </TouchableOpacity>
      ))}
      {voted && <Text style={styles.thankYou}>Thanks for voting!</Text>}
    </View>
  );
};

export default Poll;

const styles = StyleSheet.create({
  container: { padding: 20 },
  question: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  option: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  optionText: { fontSize: 16 },
  thankYou: { marginTop: 20, color: 'green', fontSize: 16 },
});

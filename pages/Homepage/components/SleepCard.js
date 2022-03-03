import React, { useState, useEffect } from 'react';
import { Center, Text, Box, HStack, Stack, Heading, Badge } from 'native-base'
import { VictoryPie, VictoryTheme } from "victory-native";


const SleepTime = () => {
    const [sleepSeconds, setSleepSeconds] = useState(0)
    const [sleepHours, setSleepHours] = useState(0)
    const [sleepMins, setSleepMins] = useState(0)

    useEffect(() => {
        setSleepSeconds(27000)
        setSleepHours(Math.trunc(sleepSeconds / 3600))
        setSleepMins((sleepSeconds - sleepHours * 3600) / 60)
    }, [sleepSeconds, sleepHours])

    return (
        <Box width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Stack p="4" height="100%" justifyContent='center'>
                <Stack space={2}>
                    <Heading size="md">
                        Sleep Data💤
                    </Heading>
                </Stack>

                <Center h={90} w='100%'>
                    <HStack alignItems="center" space={1}>
                        <Text bold fontSize='xl'>{sleepHours}</Text>
                        <Text>hr</Text>
                        <Text bold fontSize='xl'>{sleepMins}</Text>
                        <Text>min</Text>
                    </HStack>
                </Center>
            </Stack>
            <Box>
            </Box>
        </Box>
    )
};

export default SleepTime
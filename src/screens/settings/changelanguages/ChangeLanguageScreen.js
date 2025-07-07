import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useShallow } from 'zustand/shallow';
import useStore from '../../../constants/zustand';
import { useTranslation } from 'react-i18next';

const langs = [
  {
    code: 'en',
    label: 'English',
    flag: require('../../../assets/image/uk.png'),
  },
  {
    code: 'mm',
    label: 'Myanmar',
    flag: require('../../../assets/image/mmm.png'),
  },
  { code: 'th', label: 'Thai', flag: require('../../../assets/image/th.png') },
  {
    code: 'jpn',
    label: 'Japanese',
    flag: require('../../../assets/image/jpn.webp'),
  },
  { code: 'kh', label: 'Khmer', flag: require('../../../assets/image/kh.png') },
];

const ChangeLanguageScreen = () => {
  const { t, i18n } = useTranslation();

  const { lang, setLang } = useStore(
    useShallow(state => ({
      lang: state.lang,
      setLang: state.setLang,
    })),
  );

  const handleChangeLanguage = code => {
    i18n.changeLanguage(code);
    setLang(code);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '20%', marginVertical: 20 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../../assets/image/acct.webp')}
        />
      </View>
      <View style={{ alignItems: 'center', marginVertical: 15 }}>
        <Text style={styles.title}>{t('Choose Your Preffered Language')}</Text>
      </View>
      <View>
        {langs.map(item => (
          <TouchableOpacity
            key={item.code}
            onPress={() => handleChangeLanguage(item.code)}
            style={styles.button}
          >
            <View style={styles.buttonContent}>
              <Image source={item.flag} style={styles.flag} />
              <Text style={styles.buttonText}>{item.label}</Text>
              {lang === item.code && (
                <Image
                  style={styles.check}
                  source={require('../../../assets/image/check.png')}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChangeLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  check: {
    width: 20,
    height: 20,
  },
});

import { test, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '../../src/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
        text: '',
      },
    });
  });
});

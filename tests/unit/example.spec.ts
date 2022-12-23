import { render, screen } from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@views/Home.vue';

describe('HelloWorld.vue', () => {
    test('renders props.msg when passed', () => {
        const msg = 'new message';
        render(HelloWorld, {
            props: { msg }
        });
        const helloText = screen.getByText(msg);
        expect(helloText);
    });
});

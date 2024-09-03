import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
}

passport.use(new Strategy(options, (payload, done) => {
    return done(null, payload);
}));
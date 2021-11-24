before deploy replace "true" in ProtectedRoute


Tools:
React-Router v5


Resources:

Authn and Authz
Password Authentication with Firebase: https://firebase.google.com/docs/auth/web/password-auth
ReactRoutes Training ProtectedRoutes: https://v5.reactrouter.com/web/example/auth-workflow
UI Dev Protected Routes: https://ui.dev/react-router-v5-protected-routes-authentication/
- I want to be able to do this without a class component in App and instead using useState and Context Providers. At the moment I just couldn't get it to work and relied instead on passing probs. For now that's all that is needed.


Upload to Storage and Firebase Store
upload files to Storage: https://firebase.google.com/docs/storage/web/upload-files
upload object to Store: https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document



To Do:

- remove tab icon and change name
- add some title to ArtWall
- remove references to burrito
- (bigger) make better how images display on different screensizes
    -- add a minimum breakpoint?
    -- on mobile switch to one image per row (done)
        --too much image is cut off (works with object-fit)

    -- want to click on image and overflow with a transition over other images to show entire image and title and description
        --material ui has a transition component
        -- has a click function on the Cards --- add onClick to CardAction Area
        -- break the object-fit somewhere to expand?

-- remove outdated material ui core
This is Face detection app.

Entire app use React-Router to handle routing in React.

Entire app use React-Redux and Redux to have a global state about user login except FaceDetectionApp. FaceDetectionApp use React state to handle detection state. Because entire app use global state so FaceDetectionApp also aware of state of user login or not.

FaceDetectionApp is another app under MainApp and it handle by itself. Main app do not care about detail of how FaceDetectionApp work.

Important: form in React should be handle by yourself programmatically instead of using form's default submition. This can prevent entire app been reload result in lose state.



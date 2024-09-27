import tensorflow as tf
from tensorflow.keras import layers, models # type: ignore

def create_pollution_model():
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
        layers.MaxPooling2D(2, 2),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D(2, 2),
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dense(1, activation='sigmoid')
    ])

    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

# Load data and train
if __name__ == "__main__":
    model = create_pollution_model()
    # Assume train_images, train_labels are prepared
    model.fit(train_images, train_labels, epochs=10) # type: ignore
    model.save('pollution_detection_model.h5')

import dash
from dash import dcc, html
import plotly.express as px
import pandas as pd

# Sample data
data = pd.DataFrame({
    'Region': ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean'],
    'Pollution Severity': [7.8, 5.3, 6.2]
})

app = dash.Dash(__name__)

app.layout = html.Div(children=[
    html.H1(children='Marine Pollution Dashboard'),
    dcc.Graph(
        id='pollution-graph',
        figure=px.bar(data, x='Region', y='Pollution Severity', title='Pollution Severity by Region')
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)

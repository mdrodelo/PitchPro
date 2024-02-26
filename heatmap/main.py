from mplsoccer import Pitch
import matplotlib.pyplot as plt
import io
import base64
from mplsoccer import Pitch, Sbopen
import matplotlib.pyplot as plt

pitch = Pitch(pitch_color='grass', line_color='white', stripe=True)
# specifying figure size (width, height)
fig, ax = pitch.draw(figsize=(10, 5))
# plt.show()


def TestHeatmap():
    parser = Sbopen()
    df_false9 = parser.event(69249)[0]
    df_false9 = df_false9.loc[df_false9.player_id == 5503, ['x', 'y']]
    test_pitch = Pitch(line_color='black', line_zorder=2)
    test_fig, testax = test_pitch.draw(figsize=(10, 5))
    kde = test_pitch.kdeplot(df_false9.x, df_false9.y, ax=testax, fill=True)
    buf = io.BytesIO()
    test_fig.savefig(buf, format='png')
    buf.seek(0)
    return buf.read()


import gpxpy

# def parse_gpx_data(gpx_file_path):
#     """
#     Parses a GPX file to extract relevant data points: SessionDate, Timestamp, Latitude, and Longitude.
#
#     :param gpx_file_path: Path to the GPX file to be parsed.
#     :return: A list of dictionaries, each containing the extracted information for each point.
#     """
#     with open(gpx_file_path, 'r') as gpx_file:
#         gpx = gpxpy.parse(gpx_file)
#
#     data_points = []
#
#     for track in gpx.tracks:
#         for segment in track.segments:
#             for point in segment.points:
#                 data_points.append({
#                     'SessionDate': point.time.strftime('%Y-%m-%d'),
#                     'Timestamp': point.time.strftime('%H:%M:%S'),
#                     'Latitude': point.latitude,
#                     'Longitude': point.longitude
#                 })
#
#     return data_points
#
#
# gpx_file_path = '../sample_data/data1.gpx'
# data_points = parse_gpx_data(gpx_file_path)
# print(data_points)
